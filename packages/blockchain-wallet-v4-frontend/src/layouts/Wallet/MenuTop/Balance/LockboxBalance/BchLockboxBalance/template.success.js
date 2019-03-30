import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import { LinkContainer } from 'react-router-bootstrap'
import { CoinBalanceWrapper } from 'components/Balances'

const Success = props => {
  const { balance } = props

  const Wrapper = styled.div``

  return (
    <LinkContainer to='/lockbox'>
      <Wrapper data-e2e='balanceDropdown-lockbox-bch'>
        <CoinBalanceWrapper coin='BCH' balance={balance} />
      </Wrapper>
    </LinkContainer>
  )
}

Success.propTypes = {
  balance: PropTypes.oneOfType([PropTypes.number, PropTypes.string]).isRequired
}

export default Success
