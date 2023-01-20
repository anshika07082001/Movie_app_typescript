type errorProps={
    error: Error
    resetErrorBoundary: () => void;
}

export function ErrorComponent (props:errorProps) {
    
  return (
    <>
    <div>{props.error.message}</div>
    <button onClick={props.resetErrorBoundary}>Reset</button>
    </>
  )
}

export default ErrorComponent