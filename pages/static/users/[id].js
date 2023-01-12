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
  try {
    const { data } = await axios(`http://localhost:8080/users/${id}`);
    return {
      props: { data },
    };
  } catch (error) {
    return {
      props: {
        data: {
          id,
          email: "We have only 12 Users",
          first_name: "User Not",
          last_name: "Found",
          avatar:
            "https://static.india.com/wp-content/uploads/2015/09/Horror.jpg?impolicy=Medium_Resize&w=1200&h=800",
        },
      },
    };
  }
}
