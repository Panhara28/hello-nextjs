import { useRouter } from 'next/router';
import { Layout } from '../components/Layout';

const Post = () => {
  const router = useRouter();
  return(
    <Layout>
      <h1>{ router.query.title}</h1>
      <p>This is post detail</p>
    </Layout>
  )

}

export default Post;

