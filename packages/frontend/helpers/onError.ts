import toast from 'react-hot-toast';

const onError = (error: any) => {
  toast.error(error?.data?.message ?? error?.message ?? "Something is wrong");
};

export default onError;
