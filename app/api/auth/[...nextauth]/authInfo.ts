import { getSession } from "next-auth/react";
import { NextApiRequest, NextApiResponse } from "next";

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  const session = await getSession({ req });

  if (!session) {
    // Handle case where user is not authenticated
    res.status(401).json({ error: "Not authenticated" });
    return;
  }

  // Now you can access client ID and access token from the session object
  const clientId = session.clientId;
  const accessToken = session.accessToken;

  // Use client ID and access token as needed
  
  // Return response
  res.status(200).json({ clientId, accessToken });
}