module.exports = () =>
  process.env.GERRIT_PROJECT ? 'gerrit'
  : process.env.SYSTEM_TEAMFOUNDATIONCOLLECTIONURI ? 'azure-pipelines'
  : process.env.BITRISE_IO ? 'bitrise'
  : process.env.BUDDY_WORKSPACE_ID ? 'buddy'
  : process.env.BUILDKITE ? 'buildkite'
  : process.env.CIRRUS_CI ? 'cirrus'
  : process.env.GITLAB_CI ? 'gitlab'
  : process.env.APPVEYOR ? 'appveyor'
  : process.env.CIRCLECI ? 'circle-ci'
  : process.env.SEMAPHORE ? 'semaphore'
  : process.env.DRONE ? 'drone'
  : process.env.DSARI ? 'dsari'
  : process.env.GITHUB_ACTION ? 'github-actions'
  : process.env.TDDIUM ? 'tddium'
  : process.env.STRIDER ? 'strider'
  : process.env.TASKCLUSTER_ROOT_URL ? 'taskcluster'
  : process.env.JENKINS_URL ? 'jenkins'
  : process.env['bamboo.buildKey'] ? 'bamboo'
  : process.env.GO_PIPELINE_NAME ? 'gocd'
  : process.env.HUDSON_URL ? 'hudson'
  : process.env.WERCKER ? 'wercker'
  : process.env.NETLIFY ? 'netlify'
  : process.env.NOW_GITHUB_DEPLOYMENT ? 'now-github'
  : process.env.GITLAB_DEPLOYMENT ? 'now-gitlab'
  : process.env.BITBUCKET_DEPLOYMENT ? 'now-bitbucket'
  : process.env.BITBUCKET_BUILD_NUMBER ? 'bitbucket-pipelines'
  : process.env.NOW_BUILDER ? 'now'
  : process.env.MAGNUM ? 'magnum'
  : process.env.NEVERCODE ? 'nevercode'
  : process.env.RENDER ? 'render'
  : process.env.SAIL_CI ? 'sail'
  : process.env.SHIPPABLE ? 'shippable'
  : process.env.TEAMCITY_VERSION ? 'teamcity'
  // codeship and a few others
  : process.env.CI_NAME ? process.env.CI_NAME
  // heroku doesn't set envs other than node in a heroku-specific location
  : /\/\.heroku\/node\/bin\/node$/.test(process.env.NODE || '') ? 'heroku'
  // test travis after the others, since several CI systems mimic it
  : process.env.TRAVIS ? 'travis-ci'
  // aws CodeBuild/CodePipeline
  : process.env.CODEBUILD_SRC_DIR ? 'aws-codebuild'
  : process.env.CI === 'true' || process.env.CI === '1' ? 'custom'
  // Google Cloud Build - it sets almost nothing
  : process.env.BUILDER_OUTPUT ? 'builder'
  : false
