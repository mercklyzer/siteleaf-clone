import React, { Component } from 'react'

const SimpleSectionContext = React.createContext()

const SimpleSectionProvider = SimpleSectionContext.Provider
const SimpleSectionConsumer = SimpleSectionContext.Consumer

export {SimpleSectionProvider, SimpleSectionConsumer}
