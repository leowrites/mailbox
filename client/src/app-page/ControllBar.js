import Form from 'react-bootstrap/Form'
import Stack from 'react-bootstrap/Stack'
import Container from 'react-bootstrap/Stack'
import Button from 'react-bootstrap/Button'
import { EnvelopeCheck } from 'react-bootstrap-icons'

export default function ControllBar({ handleCheckAll, handleUnsubscribe }) {
    return (
        <Container>
            <Stack direction='horizontal' gap={3}>
                <Form.Check className='ms-auto'
                    type={'checkbox'}
                    id='select-all'
                    label={<strong>select all</strong>}
                    onChange={handleCheckAll} />
                <Button variant='dark'
                    size='sm'
                    onClick={handleUnsubscribe}>
                    <strong>Unsubscribe </strong>
                    <EnvelopeCheck />
                </Button>
            </Stack>
        </Container>
    )
}