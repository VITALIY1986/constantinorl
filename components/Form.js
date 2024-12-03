import { Row, Col } from "./Grid";

export default function Form(props) {
    return (
        <div className="comment-form">
            {props.title && <h4 className="text-2xl font-bold font-body mb-8">{props.title}</h4>}
            <form>
                <Row className="row row-md">
                    <Col className="col-sm-12 col-md-6 col-lg-6">
                        <div className="form__item">
                            <label htmlFor="form-item-name">Your Name</label>
                            <input type="text" id="form-item-name" />
                        </div>
                    </Col>
                    <Col className="col-sm-12 col-md-6 col-lg-6">
                        <div className="form__item">
                            <label htmlFor="form-item-email">Your Email</label>
                            <input type="email" id="form-item-email" />
                        </div>
                    </Col>
                    <Col className="col-12">
                        <div className="form__item">
                            <label htmlFor="form-item-message">Your Message</label>
                            <textarea id="form-item-message"></textarea>
                        </div>
                    </Col>
                    <Col className="col-12">
                        <button className="button bg-black hover:bg-red-500 px-4 py-2 text-white">Send Message</button>
                    </Col>
                </Row>
            </form>
        </div>
    );
}
