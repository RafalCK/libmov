import { useRouter } from "vue-router";

function useNavigation() {
  const router = useRouter();

  const goBack = () => {
    if (router.options.history.push.length > 1) {
      router.go(-1);
    } else {
      router.push("/");
    }
  };

  return {
    goBack,
  };
}

export { useNavigation };
