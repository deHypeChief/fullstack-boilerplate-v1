import { createFileRoute, useParams } from '@tanstack/react-router'

function Blogs(): JSX.Element {
  const { id } = useParams({ from: "/blogs/$id" });
  return (
    <>
      This {id} blog  
    </>
  )
}

export const Route = createFileRoute('/blogs/$id')({
  component: Blogs
})