import roles from "../data/roles.json";

interface IuseActivityParams {
  activity: string;
  role: string;
  activities: string[];
}

const useIsVerified = ({ activity, role, activities }: IuseActivityParams) => {
const indexOfActivity :number = activities.indexOf(activity);
const indexOfRole :number = roles.indexOf(role);

if (indexOfRole >= indexOfActivity){
  return true
}
else{
  return false
}
};

export default useIsVerified;
