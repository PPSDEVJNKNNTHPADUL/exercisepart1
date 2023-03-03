import axios from "axios";
import { Typography, Button, Grid, Box } from "@mui/material";
import {useRouter} from "next/router";
import dynamic from "next/dynamic";
const DynamicHeader = dynamic(() => import("../../components/navapp"), {});
const DynamicFooter = dynamic(() => import("../../components/footer"), {});
import { GetStaticProps, GetStaticPaths} from 'next'


interface ProfileInfoProps {
  dataIds: {
    username?: string;
    firstName?: string;
    middleName?: string;
    lastName?: string;
    isLogin: boolean;
  };
}


const ProfileInfo: React.FC<ProfileInfoProps> = ({ dataIds }) => {
  
  const router = useRouter()
  const handleLogout = () => {
    router.back();
  };
  return (
    <>
      <DynamicHeader />
      <Grid
        container
        direction="column"
        justifyContent="center"
        alignItems="center"
        minHeight="50vh"
      >
        <Box>
          <Typography variant="h6">Your Profile Info</Typography>
          <Typography variant="body1">Username: {dataIds?.username}</Typography>
          <Typography variant="body1">
            First Name: {dataIds?.firstName}
          </Typography>
          <Typography variant="body1">
            Middle Name: {dataIds?.middleName}
          </Typography>
          <Typography variant="body1">
            Last Name: {dataIds?.lastName}
          </Typography>
          <Button onClick={handleLogout} variant="contained">
            Back
          </Button>
        </Box>
      </Grid>
      <DynamicFooter />
    </>
  );
};

export default ProfileInfo;

interface Data {
  id: string;
}

export const getStaticPaths: GetStaticPaths<{ profileids: string }> = async () => {
  const { data } = await axios.get<Data[]>(
    'https://63e1d7b34324b12d963f6754.mockapi.io/test/'
  );
  const paths = data.map(dataPaths => {
    return {
      params: {
        profileids: `${dataPaths.id}`
      }
    };
  });
  return {
    paths,
    fallback: true
  };
};

export const getStaticProps: GetStaticProps = async (context) => {
  let url = "https://63e1d7b34324b12d963f6754.mockapi.io/test/";
  if (context.params && context.params.profileids) {
    url += `/${context.params.profileids}`;
  }
  
  const { data } = await axios.get(url);
  return {
    props: {
      dataIds: data,
    },
    revalidate: 5,
  };
};



