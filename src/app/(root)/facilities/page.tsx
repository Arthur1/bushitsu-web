import type { FC } from 'react'
import Container from '@/app/(root)/_common/components/Container'
import Headline1 from '@/app/(root)/_common/components/Headline1'
import Headline2 from '@/app/(root)/_common/components/Headline2'
import FacilitiesList from './_components/FacilitiesList'

const FacilitiesPage: FC = () => {
  return (
    <Container>
      <Headline1>Facilities</Headline1>
      <p>ここに書かれているのは一例です。</p>
      <Headline2>家具</Headline2>
      <FacilitiesList
        facilities={[
          'ダイニングテーブル（6人用、90 cm × 240 cm）',
          '椅子 2脚',
          '折りたたみ椅子 4脚',
        ]}
      />
      <Headline2>調理器具</Headline2>
      <FacilitiesList
        facilities={[
          'システムキッチン（ガスコンロ）',
          '冷蔵庫',
          '電子レンジ',
          '電気ケトル',
          'グリル鍋',
        ]}
      />
      <Headline2>消耗品</Headline2>
      <FacilitiesList facilities={['プラスチックコップ', '割り箸']} />
      <Headline2>デジタル製品</Headline2>
      <FacilitiesList facilities={['ゲスト用Wi-Fi', 'インクジェットプリンター']} />
    </Container>
  )
}

export default FacilitiesPage
