import { Oval } from "react-loader-spinner";

export const Loader = () => {
    return (
      <Oval
        ariaLabel="loading-indicator"
        height={70}
        width={70}
        strokeWidth={5.5}
        strokeWidthSecondary={2.25}
        color="black"
        secondaryColor="white"
      />
    );
}