import { useRouter } from 'next/router';

const article = () => {
  const router = useRouter();
  const { id } = router.query;

  return <div>this is a article {id}</div>;
};


export const getServerSideProps= async(context)=>{
  const res=await fetch();
}

export default article;
