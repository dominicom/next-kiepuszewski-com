import { useRouter } from 'next/router'


const WorkGenre = () => {
  const router = useRouter()
  const { workId } = router.query

  return <p>Work genre: {workId}</p>
}

export default WorkGenre