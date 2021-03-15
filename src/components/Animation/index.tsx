import Lottie from 'react-lottie'

export type AnimationProps = {
  lotti?: any
  width: number
  height: number
}
const LottieAnimation = ({ lotti, width, height }: AnimationProps) => {
  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: lotti,
    rendererSettings: {
      preserveAspectRatio: 'xMidYMid slice'
    }
  }

  return (
    <div>
      <Lottie options={defaultOptions} height={height} width={width} />
    </div>
  )
}

export default LottieAnimation
