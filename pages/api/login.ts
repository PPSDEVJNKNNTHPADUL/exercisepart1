import axios from 'axios';
import { NextApiRequest, NextApiResponse } from 'next';

interface User {
  emailAdd: string;
  password: string;
}
// import cookie from 'cookie';

const handler = async (req: NextApiRequest, res: NextApiResponse) => {
  if (req.method === 'POST') {
    const emailAdd: string = req.body.email;
    const password: string = req.body.password;

    try {
      const response = await axios.get<User[]>('https://63e1d7b34324b12d963f6754.mockapi.io/test/');
      const users = response.data;
      const existingUser = users.find(user => user.emailAdd === emailAdd && user.password === password);
      
      if (!existingUser) {
        res.status(401).json({ message: 'Email and password do not match any existing user.' });
        return;
      }
      
      // const emailCookie = cookie.serialize('userCredentials', existingUser.emailAdd, {
      //   httpOnly: true,
      //   path: '/',
      // });
      
      // res.setHeader('Set-Cookie', emailCookie);
      res.status(200).json({ message: 'Success', feedback: existingUser });
    } catch (error) {
      res.status(500).json({ message: 'Something went wrong on the server.' });
    }
  } else {
    res.status(405).json({ message: 'Method not allowed.' });
  }
};

export default handler;
