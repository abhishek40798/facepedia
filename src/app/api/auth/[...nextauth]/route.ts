import NextAuth from "next-auth";
import GoogleProvider from "next-auth/providers/google";
import CredentialsProvider from "next-auth/providers/credentials";

const handler = NextAuth({
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID as string,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET as string,
    }),
    CredentialsProvider({
      name: "Credentials",
      credentials: {
        name:{label:"Name",type:"text"},
        email: { label: "Email", type: "email" },
        password: { label: "Password", type: "password" },
      },
      async authorize(credentials,req) {
        const user = { id: "1", name: "J Smith", email: "jsmith@example.com" };
        console.log(credentials,req,'sss');
        if (user) {
          return user;
        } else {
          return null;
        }
      },
    }),
    // add more providers here
  ],
});

export { handler as GET, handler as POST };
