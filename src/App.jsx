import {
  Card,
  CardBody,
  CardImg,
  CardText,
  CardTitle,
  Col,
  Container,
  Row,
  Spinner,
} from "reactstrap";
import useUserData from "./hooks/useUserData";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function App() {
  const { data, loading } = useUserData("solmazmry");

  return (
    <Container className="mt-5">
      <ToastContainer />
      <h1 className="text-center mb-4 ">GitHub istifadeci melumati </h1>
      {loading && (
        <div className="text-center">
          <Spinner color="primary" />
        </div>
      )}
      {!loading && data && (
        <Row className="justify-content-center">
          <Col md="6" lg="4">
            <Card className="text-center">
              <CardImg
                top
                width="100%"
                src={data.avatar_url}
                style={{
                  width: "150px",
                  height: "150px",
                  borderRadius: "50%",
                  margin: "20px auto",
                }}
              />
              <CardBody>
                <CardTitle tag="h5">Istifadeci adi :{data.login}</CardTitle>
                <CardText>
                  <strong>Adi: {data.name}</strong>
                </CardText>
                <CardText>
                  <strong>Takibcileri : {data.followers}</strong>
                </CardText>
                <CardText>
                  <strong>izledikleri: {data.following}</strong>
                </CardText>
                <CardText>
                  <strong>Repo: {data.public_repos}</strong>
                </CardText>
                <CardText>
                  <strong>Bio: {data.bio}</strong>
                </CardText>
              </CardBody>
            </Card>
          </Col>
        </Row>
      )}
    </Container>
  );
}

export default App;
