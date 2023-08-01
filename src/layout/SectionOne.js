import Card from '../components/Card'
import SectionHeader from '../components/SectionHeader'

const data = [
  {
    num: '01',
    title: 'Lorem eine ipsum',
    text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore.'
  },
  {
    num: '02',
    title: 'Lorem eine ipsum',
    text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore.'
  },
  {
    num: '03',
    title: 'Lorem eine ipsum',
    text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore.'
  },

]

export default function SectionOne() {
  return (
    <div className='mt-80 px-12'>
      <SectionHeader subtitle="Lorem Ipsum" title="Consecte Adipisc" text="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore."/>
      <div className='flex space-x-6 justify-center'>
        {data.map((card, index) => <Card key={index} num={card.num} title={card.title} text={card.text} />)}
      </div>

    </div>
  )
}
