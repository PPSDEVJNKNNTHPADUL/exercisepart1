import axios from "axios";
import Link from "next/link";
import dynamic from "next/dynamic";
import { Typography, Button, Box, Grid } from "@mui/material";
import {GetServerSideProps } from 'next'

const DynamicHeader = dynamic(() => import("../../components/navapp"), {});
const DynamicFooter = dynamic(() => import("../../components/footer"), {});

export interface ProfileData {
  confirmPass: string;
  contact: string;
  emailAdd: string;
  firstName: string;
  id: number;
  lastName: string;
  middleName: string;
  password: string;
}

export interface ProfileList {
  profile: ProfileData[];
}

export default function Profile({ profile }: any) {
 
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
          {profile.map((item: any) => (
            <div key={item.id}>
              <Link
                style={{
                  textDecoration: "none",
                  color: "black",
                }}
                href={`profile/${item.id}`}
                passHref
              >
                <Typography variant="h6" gutterBottom>
                  Username: {item.username}
                </Typography>
              </Link>
            </div>
          ))}
        </Box>
      </Grid>
      <DynamicFooter />
    </>
  );
}

export const getServerSideProps: GetServerSideProps = async (context) => {
  const response = await axios.get(
    "https://63e1d7b34324b12d963f6754.mockapi.io/test/"
  );
  const data: ProfileList = response.data;
  return {
    props: {
      profile: data,
    },
  };
};
