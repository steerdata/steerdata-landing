import {useEffect} from "react";
    
const HubspotContactForm = (props: { region: any; portalId: any; formId: any; }) => {
    const { region, portalId, formId } = props;
    useEffect(() => {
        const script = document.createElement('script');
        script.src='https://js.hsforms.net/forms/shell.js';
        document.body.appendChild(script);

        script.addEventListener('load', () => {
            // @TS-ignore
            if (window.hbspt) {
                // @TS-ignore
                window.hbspt.forms.create({
                    region: region,
                    portalId: portalId,
                    formId: formId,
                    target: '#hubspotForm'
                })
            }
        });
    }, [formId, portalId, region]);

    return (
        <div>
            <div id="hubspotForm"></div>
        </div>
    );
};

export default HubspotContactForm;