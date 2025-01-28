// Other imports

import { ClerkProvider, SignedIn, SignedOut, UserButton, SignInButton } from '@clerk/react-router'

 function login_page() {
  return (
    <ClerkProvider
      loaderData={loaderData}
      signUpFallbackRedirectUrl="/"
      signInFallbackRedirectUrl="/"
    >
      <header className="flex items-center justify-center py-8 px-4">
        <SignedOut>
          <SignInButton />
        </SignedOut>
        <SignedIn>
          <UserButton />
        </SignedIn>
      </header>
      <main>
        <Outlet />
      </main>
    </ClerkProvider>
  )
}

// Rest of the root.tsx code