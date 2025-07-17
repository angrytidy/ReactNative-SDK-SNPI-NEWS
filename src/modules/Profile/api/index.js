export const Notification = (status) => {
  return `/user/notification/${status}`;
};

export const  userNotification = (id) => {
  return `/user/${id}`;
};

export function setFollower() {
  return "/config";
}
