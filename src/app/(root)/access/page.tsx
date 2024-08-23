import type { FC } from 'react'
import Container from '@/app/(root)/_common/components/Container'
import Headline1 from '@/app/(root)/_common/components/Headline1'

const AccessPage: FC = () => {
  return (
    <Container>
      <Headline1>Access</Headline1>
      <p>東急田園都市線・横浜市営地下鉄ブルーライン「あざみ野」駅より徒歩6分</p>
      <p>詳しい住所はArthurまで直接尋ねてください。</p>
    </Container>
  )
}

export default AccessPage
