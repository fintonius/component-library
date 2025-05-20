
// there will be a single and a multi-line version
// both will have a simple message with appropriate icon heading
// the multi-line is additional text beneath the heading
// both types have the same bkg and font colour depending on message

// how do I make this as "automated" as possible - as in how much info 
// does the user/dev have to include when using the Component to get 
// the desired effect?

export default function Banner({children, setStatus}) {
    const statusList = [
        {status: 'success', message: 'Congratulations!', color: 'green'},
        {status: 'warning', message: 'Attention', color: 'yellow'},
        {status: 'error', message: 'There is a problem with your application', color: 'red'},
        {status: 'neutral', message: 'Update available', color: 'blue'}
    ]

    const status = statusList.find(status => status.status === setStatus)

    return (
        <div className={`banner ${status.color}`}>
            <h2>{status.message}</h2>              
            {children && <p>{children}</p>} {/* optional text input for user */}
        </div>
    )
}