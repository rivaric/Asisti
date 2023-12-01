import { Box, Flex } from '@mantine/core'
import { HistoryTable } from '../../components/table/ui'
import { Root } from '../root/Root'

export default function History() {
  return (
    <Flex bg="#F2F3F4" h="100vh">
      <Root />
      <Box w="100%" h="100%" m="30px">
        <HistoryTable />
      </Box>
    </Flex>
  )
}
