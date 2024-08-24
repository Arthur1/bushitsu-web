import type { FC } from 'react'
import Container from '@/app/(root)/_common/components/Container'
import Headline1 from '@/app/(root)/_common/components/Headline1'
import Headline2 from '@/app/(root)/_common/components/Headline2'

const FacilitiesPage: FC = () => {
  return (
    <Container>
      <Headline1>Facilities</Headline1>
      <Headline2>家具</Headline2>
      <ul className="list-inside list-disc">
        <li>ダイニングテーブル（6人用、90 cm × 240 cm）</li>
        <li>椅子 2脚</li>
        <li>折りたたみ椅子 4脚</li>
      </ul>
      <Headline2>調理器具</Headline2>
      <ul className="list-inside list-disc">
        <li>冷蔵庫</li>
        <li>電子レンジ</li>
        <li>電気ケトル</li>
        <li>グリル鍋</li>
      </ul>
    </Container>
  )
}

export default FacilitiesPage
