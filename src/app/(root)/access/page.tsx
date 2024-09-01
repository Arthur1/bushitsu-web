import type { FC } from 'react'
import Container from '@/app/(root)/_common/components/Container'
import Headline1 from '@/app/(root)/_common/components/Headline1'
import { Link } from '@nextui-org/link'

const AccessPage: FC = () => {
  return (
    <Container>
      <Headline1>Access</Headline1>
      <p>東急田園都市線・横浜市営地下鉄ブルーライン「あざみ野」駅より徒歩6分</p>
      <p>
        詳しい住所は<Link href="https://x.com/Arthur1__">Arthur</Link>まで直接尋ねてください。
      </p>
    </Container>
  )
}

export default AccessPage
