import {
    FormControl,
    FormLabel,
    IconButton,
    Input,
    InputGroup,
    InputRightElement,
    useDisclosure,
    useMergeRefs,
  } from '@chakra-ui/react'
  import React, { useRef } from 'react';
  
  const PasswordField = React.forwardRef((props, ref) => {
    const { isOpen, onToggle } = useDisclosure()
    const inputRef = useRef<HTMLInputElement>(null)
  
    const mergeRef = useMergeRefs(inputRef, ref)
    const onClickReveal = () => {
      onToggle()
      if (inputRef.current) {
        inputRef.current.focus({ preventScroll: true })
      }
    }
  
    return (
      <FormControl>
        <FormLabel htmlFor="password">Password</FormLabel>
        <InputGroup>
          <InputRightElement>
            <IconButton
              variant="text"
              aria-label={isOpen ? 'Mask password' : 'Reveal password'}
              onClick={onClickReveal}
            />
          </InputRightElement>
          <Input
            id="password"
            ref={mergeRef}
            name="password"
            type={isOpen ? 'text' : 'password'}
            autoComplete="current-password"
            required
            {...props}
          />
        </InputGroup>
      </FormControl>
    )
  })
  
  PasswordField.displayName = 'PasswordField'

  export default PasswordField;