import React from 'react'
import Repo from '@/app/components/Repo'
import RepoContent from '@/app/components/RepoContent'
import { Suspense } from 'react'

const RepoPage = ({params:{name}}) => {
 
  return (
    <div className="card">
      <Suspense fallback={<div class="">Loading Repo...</div>}>
        <Repo name={name}></Repo>
      </Suspense>
      <Suspense fallback={<div class="loader"></div>}>
        <RepoContent name={name}></RepoContent>
      </Suspense>
    </div>
  );
}

export default RepoPage