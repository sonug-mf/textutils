import React, { useState } from 'react'
import Button from '../elements/button/Button'
import TextArea from '../elements/TextArea'
import $ from 'jquery';
import Alert from '../elements/Alert';
import TextUtilsPreview from '../sections/TextUtilsPreview'

export default function TextUtilsForm({ title, ...props }) {
    const btnsText = [
        "Upper Case",
        "Lower Case",
        "Capitalize",
        "Remove Extra Space",
        "Copy Text",
        "Clear Text",
    ];

    const [message, setMessage] = useState("");
    const [showAlert, setShowAlert] = useState(false);
    const [alertType, setAlertType] = useState("danger");
    const [alertMessage, setAlertMessage] = useState("Failed: Message not provided");


    const change = (event) => {
        const msg = event.target.value;
        setMessage(msg);
    };

    const btnClick = (event) => {
        const btnTxt = event.target.textContent || event.target.innerText;

        switch (btnTxt) {
            case "Upper Case":
                setMessage(message.toUpperCase());
                break;

            case "Lower Case":
                setMessage(message.toLowerCase());
                break;

            case "Capitalize":
                setMessage("Capitalize  it");
                break;

            case "Remove Extra Space":
                setMessage(message.replace(/  +/g, ' '));
                break;

            case "Copy Text":
                if (message.length) {
                    navigator.clipboard.writeText(message);
                    setAlertType("success");
                    setAlertMessage("Success: Text Copied Successfully");
                    setShowAlert(true);
                } else {
                    setAlertType("warning");
                    setAlertMessage("Failed: Please Provide Some Text to Copy.");
                    setShowAlert(true);
                }

                setTimeout(() => {
                    setShowAlert(false);
                    setAlertType("");
                    setAlertMessage("");
                }, 2000);
                break;

            default:
                setMessage("");
                break;
        }
    };

    return (
        <>
            <div style={{ minHeight: '60px' }}>
                {showAlert && <Alert type={alertType} message={alertMessage} />}
            </div>

            <form>
                <h2 className="text-center">{title}</h2>

                <div className="mb-3">
                    <TextArea value={message} rows="8" changeHandler={change}></TextArea>
                </div>

                <div className="mb-3">
                    {
                        btnsText.map((btn, index) => {
                            return <Button className="primary mx-1 my-1" type="button" key={index} text={btn} clickHandler={btnClick}></Button>
                        })
                    }
                </div>

                <div className='mb-3'>
                    <TextUtilsPreview message={message}></TextUtilsPreview>
                </div>
            </form>
        </>
    )
}
