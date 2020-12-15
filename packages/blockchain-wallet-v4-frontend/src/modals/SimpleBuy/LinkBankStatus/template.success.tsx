import { Props as _P, SuccessStateType } from '.'
import { Button, Icon, Image, Text } from 'blockchain-info-components'
import { FlyoutWrapper } from 'components/Flyout'
import { FormattedMessage } from 'react-intl'
import React from 'react'
import styled from 'styled-components'

type Props = _P & SuccessStateType
const Top = styled(FlyoutWrapper)`
  padding-bottom: 0px;
  position: relative;
  height: 100%;
  display: flex;
`

const CloseIcon = styled(Icon)`
  position: absolute;
  padding: inherit;
  left: 0px;
  top: 0px;
`

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
`

const Title = styled(Text)`
  margin: 56px 0 16px 0;
  text-align: center;
`

const Subcontent = styled(Text)`
  margin-bottom: 56px;
  text-align: center;
`

const Success: React.FC<Props> = props => {
  const handleSuccessContinue = () =>
    props.simpleBuyActions.setStep({
      step: 'CHECKOUT_CONFIRM',
      order: props.latestPendingOrder
    })

  return (
    <Top>
      <CloseIcon
        cursor
        name='close'
        size='20px'
        color='grey600'
        role='button'
        onClick={() => props.handleClose}
      />
      <Container>
        <Image width='100px' name='bank-success' />
        <Title color='grey800' size='20px' weight={600}>
          <FormattedMessage
            id='copy.bank_linked_title'
            defaultMessage='Bank Linked'
          />
        </Title>
        <Subcontent color='grey600' weight={500}>
          <FormattedMessage
            id='copy.bank_linked'
            defaultMessage='Your {bankName} account is now linked to your Blockchain.com Wallet'
          />
        </Subcontent>
        <Button
          data-e2e='submitSBAmount'
          height='48px'
          size='16px'
          nature='primary'
          onClick={() => handleSuccessContinue()}
          fullwidth
        >
          <FormattedMessage id='buttons.ok' defaultMessage='OK' />
        </Button>
      </Container>
    </Top>
  )
}

export default Success
