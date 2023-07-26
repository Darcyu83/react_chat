import { LoaderFunction, Outlet, useLoaderData } from "react-router-dom";
import { Container, FlexColContainer, Nav } from "./styles";

export const fetchInitialData = (async () => {
  const str = await new Promise<string>((res, rej) => {
    setTimeout(() => {
      res("resolve");
    }, 1000);
  });

  return str;
}) satisfies LoaderFunction;

export type LoaderData<TLoaderFn extends LoaderFunction> = Awaited<
  ReturnType<TLoaderFn>
> extends Response | infer D
  ? D
  : never;

export type TFetchInitialData = Awaited<ReturnType<typeof fetchInitialData>>;

export type GenericLoaderData<T extends LoaderFunction> = Awaited<
  ReturnType<T>
>;

export type GenericLoaderDataWithResponse<T extends LoaderFunction> =
  GenericLoaderData<T> extends Response | infer D ? D : never;

function Layout() {
  const data = useLoaderData() as GenericLoaderData<typeof fetchInitialData>;

  // const data = useLoaderData() as Awaited<ReturnType<typeof fetchInitialData>>;
  return (
    <Container>
      <FlexColContainer>
        <Nav to={"/"}>홈</Nav>
        {/* <Nav to={"/details"}>상세정보</Nav> */}
        <Nav to={"/rooms"}>Rooms : {data}</Nav>
      </FlexColContainer>
      <Outlet />
    </Container>
  );
}

export default Layout;
