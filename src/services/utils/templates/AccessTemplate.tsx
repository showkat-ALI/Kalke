import { useAppSelector } from "../../../app/hooks";
// import NotFound from "../components/pages/404";

type Roles = ("candidate" | "employer" | "admin" | "superadmin")[];
type PrivateTemplateProps = {
  children: React.ReactNode;
  accessRole: Roles;
};

const AccessTemplate = (props: PrivateTemplateProps) => {
  const roleAccessChecker = (userRoles: Roles, accessRole: Roles) => {
    for (let role of accessRole) {
      if (userRoles.includes(role)) {
        return true;
      }
    }
    return false;
  };

  const { children, accessRole } = props;
  const {
    user: { role },
  } = useAppSelector((state) => state.auth);

  return roleAccessChecker(role, accessRole) ? (
    <>{children}</>
  ) : (
    <h1>Not found</h1>
  );
};

export default AccessTemplate;
