/* eslint-disable */
// @ts-nocheck
'use client'

import React, { useRef, useEffect, useState } from 'react'
import Webcam from 'react-webcam'
import {
  Holistic,
  POSE_LANDMARKS,
  POSE_LANDMARKS_LEFT,
  POSE_LANDMARKS_RIGHT,
  POSE_CONNECTIONS,
  HAND_CONNECTIONS,
  FACEMESH_TESSELATION,
  FACEMESH_RIGHT_EYE,
  FACEMESH_RIGHT_EYEBROW,
  FACEMESH_LEFT_EYE,
  FACEMESH_LEFT_EYEBROW,
  FACEMESH_FACE_OVAL,
  FACEMESH_LIPS,
} from '@mediapipe/holistic/holistic'
import {
  drawConnectors,
  drawLandmarks,
  lerp,
} from '@mediapipe/drawing_utils/drawing_utils'
import { Camera } from '@mediapipe/camera_utils/camera_utils'
import { calcAngle, calcDist, getCoords, makeSuggest } from './lib'
import { createDeque } from './lib'
import { useExerciseStore, useTrainStore } from '../../store'

export const MPHolistic = () => {
  const { comment } = useExerciseStore((state) => state.exercise)
  const setRecommendation = useExerciseStore((state) => state.setRecommendation)
  const setComment = useExerciseStore((state) => state.setComment)
  const addRepeat = useTrainStore((state) => state.addRepeat)

  const webcamRef = useRef(null)
  const canvasRef = useRef(null)

  let stage = null
  let lAngle = 0
  let rAngle = 0
  let lDist = 1000
  let rDist = 1000
  let isLeft = false
  let isRight = false
  let lS = createDeque()
  let rS = createDeque()

  useEffect(() => {
    const holistic = new Holistic({
      locateFile: (file) => {
        console.log(`${file}`)
        return `https://cdn.jsdelivr.net/npm/@mediapipe/holistic/${file}`
      },
    })
    holistic.setOptions({
      modelComplexity: 1,
      smoothLandmarks: true,
      minDetectionConfidence: 0.5,
      minTrackingConfidence: 0.5,
    })
    holistic.onResults(onResults)

    if (
      typeof webcamRef.current !== 'undefined' &&
      webcamRef.current !== null
    ) {
      const camera = new Camera(webcamRef.current.video, {
        onFrame: async () => {
          await holistic.send({ image: webcamRef.current.video })
        },
        width: window.innerWidth * 0.7,
        height: window.innerHeight * 0.6,
      })
      camera.start()
    }
  }, [])

  const removeElements = (landmarks, elements) => {
    for (const element of elements) {
      delete landmarks[element]
    }
  }

  const removeLandmarks = (results) => {
    if (results.poseLandmarks) {
      removeElements(
        results.poseLandmarks,
        [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 15, 16, 17, 18, 19, 20, 21, 22]
      )
    }
  }

  const connect = (ctx, connectors) => {
    const canvas = ctx.canvas
    for (const connector of connectors) {
      const from = connector[0]
      const to = connector[1]
      if (from && to) {
        if (
          from.visibility &&
          to.visibility &&
          (from.visibility < 0.1 || to.visibility < 0.1)
        ) {
          continue
        }
        ctx.beginPath()
        ctx.moveTo(from.x * canvas.width, from.y * canvas.height)
        ctx.lineTo(to.x * canvas.width, to.y * canvas.height)
        ctx.stroke()
      }
    }
  }

  const onResults = (results) => {
    const videoWidth = webcamRef.current.video.videoWidth
    const videoHeight = webcamRef.current.video.videoHeight
    canvasRef.current.width = videoWidth
    canvasRef.current.height = videoHeight
    const canvasElement = canvasRef.current
    const canvasCtx = canvasElement.getContext('2d')

    let lShoulder
    let lElbow
    let lWrist
    let lEar

    let rShoulder
    let rElbow
    let rWrist
    let rEar
    let mouth

    let suggestedText
    let counterCondition = false
    // removeLandmarks(results);
    canvasCtx.save()
    canvasCtx.clearRect(0, 0, videoWidth, videoHeight)
    canvasCtx.translate(videoWidth, 0)
    canvasCtx.scale(-1, 1)
    canvasCtx.drawImage(
      results.image,
      0,
      0,
      canvasElement.width,
      canvasElement.height
    )
    canvasCtx.lineWidth = 5
    // if (results.poseLandmarks) {
    //     if (results.rightHandLandmarks) {
    //         canvasCtx.strokeStyle = 'white';
    //         connect(canvasCtx, [[
    //             results.poseLandmarks[POSE_LANDMARKS.RIGHT_ELBOW],
    //             results.rightHandLandmarks[0]
    //         ]]);
    //     }
    //     if (results.leftHandLandmarks) {
    //         canvasCtx.strokeStyle = 'white';
    //         connect(canvasCtx, [[
    //             results.poseLandmarks[POSE_LANDMARKS.LEFT_ELBOW],
    //             results.leftHandLandmarks[0]
    //         ]]);
    //     }
    // }
    // Pose...
    if (results.poseLandmarks) {
      lShoulder = getCoords(results.poseLandmarks[11])
      lElbow = getCoords(results.poseLandmarks[13])
      lWrist = getCoords(results.poseLandmarks[15])
      lEar = getCoords(results.poseLandmarks[7])

      rShoulder = getCoords(results.poseLandmarks[12])
      rElbow = getCoords(results.poseLandmarks[14])
      rWrist = getCoords(results.poseLandmarks[16])
      rEar = getCoords(results.poseLandmarks[8])
      const lMouth = getCoords(results.poseLandmarks[POSE_LANDMARKS.LEFT_RIGHT])
      const rMouth = getCoords(results.poseLandmarks[POSE_LANDMARKS.RIGHT_LEFT])
      mouth = [(lMouth[0] + rMouth[0]) / 2, (lMouth[1] + rMouth[1]) / 2]
      lS.push(lShoulder[1])
      rS.push(rShoulder[1])
      const l_s_c = Math.abs(lShoulder[0] - mouth[0])
      const r_s_c = Math.abs(rShoulder[0] - mouth[0])
      const l_e_c = Math.abs(lEar[0] - mouth[0])
      const r_e_c = Math.abs(rEar[0] - mouth[0])
      const diffl = lS.max - lS.last
      const diffr = rS.max - rS.last
      const diffsh = Math.abs(l_s_c - r_s_c)
      const diffear = Math.abs(l_e_c - r_e_c)

      suggestedText = makeSuggest(diffl, diffr, diffsh, diffear)

      if (suggestedText != '') {
        setComment(suggestedText)
      }

      lAngle = calcAngle(lShoulder, lElbow, lWrist)
      rAngle = calcAngle(rShoulder, rElbow, rWrist)

      drawConnectors(canvasCtx, results.poseLandmarks, POSE_CONNECTIONS, {
        color: 'white',
      })
      drawLandmarks(
        canvasCtx,
        Object.values(POSE_LANDMARKS_LEFT).map(
          (index) => results.poseLandmarks[index]
        ),
        { visibilityMin: 0.65, color: 'white', fillColor: 'rgb(255,138,0)' }
      )
      drawLandmarks(
        canvasCtx,
        Object.values(POSE_LANDMARKS_RIGHT).map(
          (index) => results.poseLandmarks[index]
        ),
        { visibilityMin: 0.65, color: 'white', fillColor: 'rgb(0,217,231)' }
      )
    }
    // Hands...
    drawConnectors(canvasCtx, results.rightHandLandmarks, HAND_CONNECTIONS, {
      color: 'white',
    })
    drawLandmarks(canvasCtx, results.rightHandLandmarks, {
      visibilityMin: 0.65,
      color: 'white',
      fillColor: 'rgb(0,217,231)',
      lineWidth: 2,
      radius: (data) => {
        return lerp(data.from.z, -0.15, 0.1, 10, 1)
      },
    })

    drawConnectors(canvasCtx, results.leftHandLandmarks, HAND_CONNECTIONS, {
      color: 'white',
    })
    drawLandmarks(canvasCtx, results.leftHandLandmarks, {
      visibilityMin: 0.65,
      color: 'white',
      fillColor: 'rgb(255,138,0)',
      lineWidth: 2,
      radius: (data) => {
        return lerp(data.from.z, -0.15, 0.1, 10, 1)
      },
    })
    if (results.leftHandLandmarks) {
      const lFinger = getCoords(results.leftHandLandmarks[10])
      lDist = calcDist(mouth, lFinger)
    }

    if (results.rightHandLandmarks) {
      const rFinger = getCoords(results.rightHandLandmarks[10])
      rDist = calcDist(mouth, rFinger)
    }

    // Face...
    // drawConnectors(
    //     canvasCtx, results.faceLandmarks, FACEMESH_TESSELATION,
    //     { color: '#C0C0C070', lineWidth: 1 });
    // drawConnectors(
    //     canvasCtx, results.faceLandmarks, FACEMESH_RIGHT_EYE,
    //     { color: 'rgb(0,217,231)' });
    // drawConnectors(
    //     canvasCtx, results.faceLandmarks, FACEMESH_RIGHT_EYEBROW,
    //     { color: 'rgb(0,217,231)' });
    // drawConnectors(
    //     canvasCtx, results.faceLandmarks, FACEMESH_LEFT_EYE,
    //     { color: 'rgb(255,138,0)' });
    // drawConnectors(
    //     canvasCtx, results.faceLandmarks, FACEMESH_LEFT_EYEBROW,
    //     { color: 'rgb(255,138,0)' });
    // drawConnectors(
    //     canvasCtx, results.faceLandmarks, FACEMESH_FACE_OVAL,
    //     { color: '#E0E0E0', lineWidth: 5 });
    // drawConnectors(
    //     canvasCtx, results.faceLandmarks, FACEMESH_LIPS,
    //     { color: '#E0E0E0', lineWidth: 5 });
    // canvasCtx.restore();
    if (lAngle > 100 && rAngle > 100 && stage === null) {
      stage = 'Поднесите руку ко рту'
      setRecommendation(stage)
    }

    if ((lAngle > 100 && isLeft) || (rAngle > 100 && isRight)) {
      if (stage == 'Опустите руку') {
        lS.clear()
        rS.clear()
      }
      isLeft = false
      isRight = false
      stage = 'Поднесите руку ко рту'
      setRecommendation(stage)
    }

    if (lDist < 0.035 && lAngle < 50 && stage == 'Поднесите руку ко рту') {
      if (suggestedText == '') {
        setComment('')
        counterCondition = true
      }
      stage = 'Опустите руку'
      isLeft = true
      setRecommendation(stage)
    }

    if (rDist < 0.035 && rAngle < 50 && stage == 'Поднесите руку ко рту') {
      if (suggestedText == '') {
        setComment('')
        counterCondition = true
      }
      stage = 'Опустите руку'
      isRight = true
      setRecommendation(stage)
    }
    if (counterCondition) {
      addRepeat()
    }
  }

  return (
    <div className="flex flex-col items-center h-fit w-full">
      <div
        className={`relative w-[1280px] h-[720px] border-4 duration-300 ${
          comment == '' ? 'border-blue-500' : 'border-red-500'
        }`}
      >
        <canvas ref={canvasRef} className="absolute w-full h-full">
          <Webcam
            audio={false}
            mirrored={true}
            ref={webcamRef}
            className="absolute w-full h-full"
          />
        </canvas>
      </div>
    </div>
  )
}
