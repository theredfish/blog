import HomePage from "@app/home-page";

export const revalidate = 600;

export default async function Page() {
  return <HomePage />;
}
