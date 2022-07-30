import type { NextPage } from 'next'
import Head from 'next/head'
import { useWeb3React } from "@web3-react/core"
import { InjectedConnector } from '@web3-react/injected-connector'
// import { useWeb3, useSwitchNetwork } from '@3rdweb/hooks'
import {
  Box,
  Button,
  Container,
  Flex,
  Menu,
  MenuButton,
  MenuItem,
  MenuList,
  Text,
} from '@chakra-ui/react'


const Home: NextPage = () => {
  const injected = new InjectedConnector({
    supportedChainIds: [1,420],
  })

  const { active, account, library, connector, activate, deactivate } = useWeb3React()
  async function connect() {
    try {
      await activate(injected)
      console.log("connect ? ")
    } catch (ex) {
      console.log(ex)
    }
  }


  return (
    <>
      <Head>
        <title>Web3 Auth</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Container maxW="container.md">
        <Flex flexDirection="column" w="100%" h="100%">
          <Flex justifyContent="flex-end" m={5}>
          <button onClick={connect} >Connect to MetaMask</button>
          </Flex>
        </Flex>
      </Container>
    </>
  )
}

export default Home
