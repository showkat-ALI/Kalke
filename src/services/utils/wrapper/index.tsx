import { useEffect } from "react";
import { useAppDispatch, useAppSelector } from "../../../app/hooks";
import { refresher, signin } from "../features/auth/authSlice";
// import BrandLoader from "../utils/loaders/BrandLoader";
import { ToastContainer } from "react-toastify";
import { useGetUserQuery } from "../features/api/authApi";

type PageWrapperProps = {
  children: React.ReactNode;
};

interface UserData {
  data: {
    profilePicture: string;
    isBanned: boolean;
    emailVerified: boolean;
    id: string;
    fullName: string;
    email: string;
    role: string;
  };
}
interface GetUserQueryResponse {
  data: UserData;
  isSuccess: boolean;
  isError: boolean;
}

const PageWrapper = (props: PageWrapperProps) => {
  const { children } = props;
  const { refresh } = useAppSelector((state) => state.auth);

  const { data, isSuccess, isError } = useGetUserQuery(
    {}
  ) as GetUserQueryResponse;
  console.log(data);
  const dispatch = useAppDispatch();
  // console.log(process.env.ADMIN_ACCESS_TOKEN)
  const isBrowser = typeof window !== "undefined";
  let savedToken: any;
  if (isBrowser) {
    const userToken = localStorage.getItem("token");
    savedToken = userToken;
  }
  useEffect(() => {
    if (!refresh) {
      if (isSuccess) {
        const {
          profilePicture,
          isBanned,
          emailVerified,
          id,
          fullName,
          email,
          role,
        } = data.data;
        setTimeout(() => {
          dispatch(
            signin({
              profilePicture,
              isBanned,
              emailVerified,
              id,
              fullName,
              email,
              role,
              token: savedToken,
            })
          );
        }, 2000);
      } else if (isError) {
        // SET REFRESH TRUE AFTER 2 SEC
        setTimeout(() => {
          dispatch(refresher());
        }, 2000);
      }
    }
  });
  return (
    <>
      <div>
        <ToastContainer />
      </div>
      {!refresh && <h1>Loading</h1>}

      {children}
    </>
  );
};

export default PageWrapper;
