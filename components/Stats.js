import axios from 'axios';
  
export const getStaticProps = async () => {
  const res = await fetch('http://localhost:8888/api/getdata')
  return {
    props: {
      res,
    },
  }
} 


const fetchData = async () => await axios.get('http://localhost:8888/api/getdata')
  .then(res => ({
    error: false,
    stats: res.data,
  }))
  .catch(() => ({
      error: true,
      stats: null,
    }),
  );

const Stats = ({ stats, error }) => {
  return (
    <section>
      <header>
        <h1>List of users {stats}</h1>
        {stats}
      </header>
    
    </section>
  );
};

export const getServerSideProps = async () => {
  const data = await fetchData();

  return {
    props: data,
  };
}



export default Stats



