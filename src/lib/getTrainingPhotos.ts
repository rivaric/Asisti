import rd from '../assets/rd.png'
import rl from '../assets/rl.png'
import rng from '../assets/rng.png'
import rnl from '../assets/rnl.png'
import rnr from '../assets/rnr.png'
import rnz from '../assets/rnz.png'
import rv from '../assets/rv.png'

export const getTrainingPhotos = (name: string) => {
  switch (name) {
    case 'Подъем прямой руки под углом 120 градусов':
      return rd
    case 'Подъем прямой руки под углом 90 градусов':
      return rl
    case 'Поднесение руки к макушке':
      return rng
    case 'Поднесение руки до лба':
      return rnl
    case 'Поднесение руки до рта':
      return rnr
    case 'Поднесение руки до рту':
      return rnr
    case 'Поднесение руки к затылку':
      return rnz
    case 'Подъем прямой руки под углом 180 градусов':
      return rv
    default:
      return rng
  }
}
