
// there will be a single and a multi-line version
// both will have a simple message with appropriate icon heading
// the multi-line is additional text beneath the heading
// both types have the same bkg and font colour depending on message

// how do I make this as "automated" as possible - as in how much info 
// does the user/dev have to include when using the Component to get 
// the desired effect?
import { FaExclamation } from "react-icons/fa";
export default function Banner({children, setStatus, setGreeting}) {

    const statusList = [
        {status: 'success', color: 'green', icon: '✓'},
        {status: 'warning', color: 'yellow', icon: '!'},
        {status: 'error', color: 'red', icon: 'x'},
        {status: 'neutral', color: 'blue', icon: 'i'}
    ]

    const status = statusList.find(status => status.status === setStatus)

    return (
        <div className={`banner ${status.color}`}>
            <span className={`icon ${status.status}`}>{`${status.icon}`}</span>
            <div className="content">
                <h2>{setGreeting}</h2>
                {children && <p>{children}</p>} {/* optional text input for user */}
            </div>
        </div>
    )
}