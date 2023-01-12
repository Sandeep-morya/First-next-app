import axios from "axios";
import SingleUser from "../../../components/SingleUser";
const User = ({ data }) => {
  return <SingleUser data={data} dim={255} />;
};

export default User;

export const getStaticPaths = async () => {
  const { data } = await axios(`https://reqres.in/api/users`);
  return {
    paths: data.data.map((e) => ({ params: { id: String(e.id) } })),
    fallback: false,
  };
};

export async function getStaticProps(context) {
  const id = context.params.id;
  const { data } = await axios(`https://reqres.in/api/users/${id}`);
  return {
    props: { data:data.data },
  };
}
