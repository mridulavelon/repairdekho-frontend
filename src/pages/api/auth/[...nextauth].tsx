import NextAuth, { NextAuthOptions } from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
import axios from "axios";

export const authOptions : NextAuthOptions = {
  providers: [
    CredentialsProvider({
      type: "credentials",
      credentials: {},
      async authorize (credentials:any, req:any) {
        const requestUrl=`https://repairdekho.vercel.app/login`;
        const requestPayload = {
          "email":credentials.email,
          "password":credentials.password  
        }
       const loginCall = await axios.post(requestUrl,requestPayload)
       .then((response:any) => {
          return response.data;
       }).catch((error:any) => {
         return {error:true}
       })
       const user = loginCall
        if (user.error) {
            return null;
          } else {
            return user;
          }
     }
    }),
  ],
  secret:process.env.NEXT_AUTH_SECRET,
  callbacks: {
    async jwt({token,account,user}:any) {
      if(user){
        token.account =  {
          ...account,
          userdetail:user
        }
      }
      return token;
    },
    async session({ session, token, user }:any) {
      session.user = token;
      return session;
    },
  },
};

export default NextAuth(authOptions);