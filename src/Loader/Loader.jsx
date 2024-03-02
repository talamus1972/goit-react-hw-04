import { Audio } from 'react-loader-spinner'


export default function Loader({ loading }) {
     
    return (
        loading && (
      <Audio
        height={40}
        width={40}
        radius={9}
        color="green"
        ariaLabel="three-dots-loading"
      />
    )
    )
}