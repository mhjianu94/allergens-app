import  PageTemplate  from '../components/pageTemplate.jsx';

const Contact = () => {
    const pageTitle = "Contact"

    return (
        <PageTemplate props={{pageTitle}}>
            <h1>Contact Page</h1>
            <p>This is the contact page.</p>
        </PageTemplate>
    )
}

export default Contact;