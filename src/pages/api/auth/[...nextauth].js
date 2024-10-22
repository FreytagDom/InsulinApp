// import NextAuth from 'next-auth';
// import GithubProvider from 'next-auth/providers/github';
// import GoogleProvider from 'next-auth/providers/google';
// import CredentialsProvider from 'next-auth/providers/credentials';

// const providers = [];

// providers.push(
//   CredentialsProvider({
//     name: 'Testlogin',
//     credentials: {
//       username: { label: 'Username', type: 'text', placeholder: 'test' },
//       password: { label: 'Password', type: 'password', placeholder: 'test' },
//     },
//     async authorize(credentials) {
//       if (credentials.username === 'test' && credentials.password === 'test') {
//         // Rückgabe der Benutzerdaten, z.B. ID, Name, Email
//         return { id: 1, name: 'Test User', email: 'test@example.com' };
//       } else {
//         return null; // Rückgabe null, wenn die Authentifizierung fehlschlägt
//       }
//     },
//   })
// );

// providers.push(
//   GoogleProvider({
//     clientId: process.env.GOOGLE_ID,
//     clientSecret: process.env.GOOGLE_SECRET,
//   }),
//   GithubProvider({
//     clientId: process.env.GITHUB_ID,
//     clientSecret: process.env.GITHUB_SECRET,
//   })
// );

// export const authOptions = {
//   providers,
//   callbacks: {
//     async jwt({ token, user }) {
//       // Wenn der User zum ersten Mal eingeloggt wird, füge seine Daten zum Token hinzu
//       if (user) {
//         token.id = user.id;
//       }
//       return token; // Gibt den modifizierten Token zurück
//     },
//     async session({ session, token }) {
//       // Füge die User-ID zur Session hinzu
//       session.user.id = token.id;
//       return session; // Gibt die aktualisierte Session zurück
//     },
//   },
//   session: {
//     jwt: true, // Verwende JWT-basierte Sitzungen
//   },
// };

// export default NextAuth(authOptions);

import NextAuth from 'next-auth';
import GithubProvider from 'next-auth/providers/github';
import GoogleProvider from 'next-auth/providers/google';
import CredentialsProvider from 'next-auth/providers/credentials';

const providers = [];

providers.push(
  CredentialsProvider({
    name: 'Testlogin',
    credentials: {
      username: { label: 'Username', type: 'text', placeholder: 'test' },
      password: { label: 'Password', type: 'password', placeholder: 'test' },
    },
    async authorize(credentials) {
      if (credentials.username === 'test' && credentials.password === 'test') {
        // Rückgabe der Benutzerdaten, z.B. ID, Name, Email
        return { id: 1, name: 'Test User', email: 'test@example.com' };
      } else {
        return null; // Rückgabe null, wenn die Authentifizierung fehlschlägt
      }
    },
  })
);

providers.push(
  GoogleProvider({
    clientId: process.env.GOOGLE_ID,
    clientSecret: process.env.GOOGLE_SECRET,
  }),
  GithubProvider({
    clientId: process.env.GITHUB_ID,
    clientSecret: process.env.GITHUB_SECRET,
  })
);

export const authOptions = {
  providers,
  callbacks: {
    async jwt({ token, user }) {
      // Wenn der User zum ersten Mal eingeloggt wird, füge seine Daten zum Token hinzu
      if (user) {
        token.id = user.id;
      }
      return token; // Gibt den modifizierten Token zurück
    },
    async session({ session, token }) {
      // Füge die User-ID zur Session hinzu
      session.user.id = token.id;
      return session; // Gibt die aktualisierte Session zurück
    },
  },
  session: {
    jwt: true, // Verwende JWT-basierte Sitzungen
  },
};

export default NextAuth(authOptions);
