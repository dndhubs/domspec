/**
 * Union type representing CIEnvironmentTaxonomy in the Trakfox ecosystem.
 * Defines standardized CI/CD environment variables for continuous integration and deployment pipelines,
 * supporting detection and configuration in Trakfox, HealthOrb, and DnDHubs. Aligns with CI/CD platform standards.
 *
 * - 'CI': Generic indicator for CI environment.
 *   Classifications: Semantic CI environment; generic CI/CD standard.
 *   Identifiers: lowercase: 'ci', camelCase: 'ciEnv', snake_case: 'ci_env', ALL_CAP: 'CI', cache key: 'env:ci:pipeline'.
 *   Model Identifier Format: 'ci-{resourceType}-{timestamp}' (e.g., 'ci-pipeline-20250807').
 *   Variations and Use Cases: Used for generic CI detection in Trakfox; build automation in HealthOrb; CI workflows in DnDHubs.
 *   Example Usage: Detecting via process.env.CI.
 *   @example 'CI'
 *
 * - 'CONTINUOUS_INTEGRATION': Alternative generic CI indicator.
 *   Classifications: Semantic CI environment; generic CI/CD standard.
 *   Identifiers: lowercase: 'continuous_integration', camelCase: 'continuousIntegrationEnv', snake_case: 'continuous_integration_env', ALL_CAP: 'CONTINUOUS_INTEGRATION', cache key: 'env:continuous_integration:pipeline'.
 *   Model Identifier Format: 'continuous_integration-{resourceType}-{timestamp}' (e.g., 'continuous_integration-pipeline-20250807').
 *   Variations and Use Cases: Used for broad CI detection in Trakfox; pipeline automation in HealthOrb; CI jobs in DnDHubs.
 *   Example Usage: Detecting via process.env.CONTINUOUS_INTEGRATION.
 *   @example 'CONTINUOUS_INTEGRATION'
 *
 * - 'BUILD_ID': Unique identifier for a CI build.
 *   Classifications: Semantic CI environment; build metadata standard.
 *   Identifiers: lowercase: 'build_id', camelCase: 'buildIdEnv', snake_case: 'build_id_env', ALL_CAP: 'BUILD_ID', cache key: 'env:build_id:pipeline'.
 *   Model Identifier Format: 'build_id-{resourceType}-{timestamp}' (e.g., 'build_id-job-20250807').
 *   Variations and Use Cases: Used for build tracking in Trakfox; job identification in HealthOrb; build logs in DnDHubs.
 *   Example Usage: Detecting via process.env.BUILD_ID.
 *   @example 'BUILD_ID'
 *
 * - 'BUILD_NUMBER': Sequential number for CI builds.
 *   Classifications: Semantic CI environment; build metadata standard.
 *   Identifiers: lowercase: 'build_number', camelCase: 'buildNumberEnv', snake_case: 'build_number_env', ALL_CAP: 'BUILD_NUMBER', cache key: 'env:build_number:pipeline'.
 *   Model Identifier Format: 'build_number-{resourceType}-{timestamp}' (e.g., 'build_number-job-20250807').
 *   Variations and Use Cases: Used for build sequencing in Trakfox; version tracking in HealthOrb; build history in DnDHubs.
 *   Example Usage: Detecting via process.env.BUILD_NUMBER.
 *   @example 'BUILD_NUMBER'
 *
 * - 'TRAVIS': Travis CI platform indicator.
 *   Classifications: Semantic CI environment; Travis CI standard.
 *   Identifiers: lowercase: 'travis', camelCase: 'travisEnv', snake_case: 'travis_env', ALL_CAP: 'TRAVIS', cache key: 'env:travis:pipeline'.
 *   Model Identifier Format: 'travis-{resourceType}-{timestamp}' (e.g., 'travis-pipeline-20250807').
 *   Variations and Use Cases: Used for Travis CI builds in Trakfox; CI automation in HealthOrb; build workflows in DnDHubs.
 *   Example Usage: Detecting via process.env.TRAVIS.
 *   @example 'TRAVIS'
 *
 * - 'CIRCLECI': CircleCI platform indicator.
 *   Classifications: Semantic CI environment; CircleCI standard.
 *   Identifiers: lowercase: 'circleci', camelCase: 'circleCiEnv', snake_case: 'circleci_env', ALL_CAP: 'CIRCLECI', cache key: 'env:circleci:pipeline'.
 *   Model Identifier Format: 'circleci-{resourceType}-{timestamp}' (e.g., 'circleci-pipeline-20250807').
 *   Variations and Use Cases: Used for CircleCI workflows in Trakfox; pipeline automation in HealthOrb; CI jobs in DnDHubs.
 *   Example Usage: Detecting via process.env.CIRCLECI.
 *   @example 'CIRCLECI'
 *
 * - 'APPVEYOR': AppVeyor CI platform indicator.
 *   Classifications: Semantic CI environment; AppVeyor standard.
 *   Identifiers: lowercase: 'appveyor', camelCase: 'appveyorEnv', snake_case: 'appveyor_env', ALL_CAP: 'APPVEYOR', cache key: 'env:appveyor:pipeline'.
 *   Model Identifier Format: 'appveyor-{resourceType}-{timestamp}' (e.g., 'appveyor-pipeline-20250807').
 *   Variations and Use Cases: Used for Windows-based CI in Trakfox; build automation in HealthOrb; CI jobs in DnDHubs.
 *   Example Usage: Detecting via process.env.APPVEYOR.
 *   @example 'APPVEYOR'
 *
 * - 'BUILDKITE': Buildkite CI platform indicator.
 *   Classifications: Semantic CI environment; Buildkite standard.
 *   Identifiers: lowercase: 'buildkite', camelCase: 'buildkiteEnv', snake_case: 'buildkite_env', ALL_CAP: 'BUILDKITE', cache key: 'env:buildkite:pipeline'.
 *   Model Identifier Format: 'buildkite-{resourceType}-{timestamp}' (e.g., 'buildkite-pipeline-20250807').
 *   Variations and Use Cases: Used for Buildkite pipelines in Trakfox; CI automation in HealthOrb; build workflows in DnDHubs.
 *   Example Usage: Detecting via process.env.BUILDKITE.
 *   @example 'BUILDKITE'
 *
 * - 'DRONE': Drone CI platform indicator.
 *   Classifications: Semantic CI environment; Drone standard.
 *   Identifiers: lowercase: 'drone', camelCase: 'droneEnv', snake_case: 'drone_env', ALL_CAP: 'DRONE', cache key: 'env:drone:pipeline'.
 *   Model Identifier Format: 'drone-{resourceType}-{timestamp}' (e.g., 'drone-pipeline-20250807').
 *   Variations and Use Cases: Used for lightweight CI in Trakfox; pipeline automation in HealthOrb; CI jobs in DnDHubs.
 *   Example Usage: Detecting via process.env.DRONE.
 *   @example 'DRONE'
 *
 * - 'GITHUB_ACTIONS': GitHub Actions platform indicator.
 *   Classifications: Semantic CI environment; GitHub Actions standard.
 *   Identifiers: lowercase: 'github_actions', camelCase: 'githubActionsEnv', snake_case: 'github_actions_env', ALL_CAP: 'GITHUB_ACTIONS', cache key: 'env:github_actions:pipeline'.
 *   Model Identifier Format: 'github_actions-{resourceType}-{timestamp}' (e.g., 'github_actions-pipeline-20250807').
 *   Variations and Use Cases: Used for GitHub Actions workflows in Trakfox; CI/CD automation in HealthOrb; build pipelines in DnDHubs.
 *   Example Usage: Detecting via process.env.GITHUB_ACTIONS.
 *   @example 'GITHUB_ACTIONS'
 *
 * - 'JENKINS_URL': Jenkins CI platform indicator.
 *   Classifications: Semantic CI environment; Jenkins standard.
 *   Identifiers: lowercase: 'jenkins_url', camelCase: 'jenkinsUrlEnv', snake_case: 'jenkins_url_env', ALL_CAP: 'JENKINS_URL', cache key: 'env:jenkins_url:pipeline'.
 *   Model Identifier Format: 'jenkins_url-{resourceType}-{timestamp}' (e.g., 'jenkins_url-pipeline-20250807').
 *   Variations and Use Cases: Used for Jenkins pipelines in Trakfox; enterprise CI in HealthOrb; build workflows in DnDHubs.
 *   Example Usage: Detecting via process.env.JENKINS_URL.
 *   @example 'JENKINS_URL'
 *
 * - 'TEAMCITY_VERSION': TeamCity CI platform indicator.
 *   Classifications: Semantic CI environment; TeamCity standard.
 *   Identifiers: lowercase: 'teamcity_version', camelCase: 'teamcityVersionEnv', snake_case: 'teamcity_version_env', ALL_CAP: 'TEAMCITY_VERSION', cache key: 'env:teamcity_version:pipeline'.
 *   Model Identifier Format: 'teamcity_version-{resourceType}-{timestamp}' (e.g., 'teamcity_version-pipeline-20250807').
 *   Variations and Use Cases: Used for TeamCity builds in Trakfox; CI automation in HealthOrb; build jobs in DnDHubs.
 *   Example Usage: Detecting via process.env.TEAMCITY_VERSION.
 *   @example 'TEAMCITY_VERSION'
 *
 * - 'TF_BUILD': Azure DevOps platform indicator.
 *   Classifications: Semantic CI environment; Azure DevOps standard.
 *   Identifiers: lowercase: 'tf_build', camelCase: 'tfBuildEnv', snake_case: 'tf_build_env', ALL_CAP: 'TF_BUILD', cache key: 'env:tf_build:pipeline'.
 *   Model Identifier Format: 'tf_build-{resourceType}-{timestamp}' (e.g., 'tf_build-pipeline-20250807').
 *   Variations and Use Cases: Used for Azure DevOps pipelines in Trakfox; CI/CD automation in HealthOrb; build workflows in DnDHubs.
 *   Example Usage: Detecting via process.env.TF_BUILD.
 *   @example 'TF_BUILD'
 *
 * - 'BITBUCKET_BUILD_NUMBER': Bitbucket Pipelines build number indicator.
 *   Classifications: Semantic CI environment; Bitbucket Pipelines standard.
 *   Identifiers: lowercase: 'bitbucket_build_number', camelCase: 'bitbucketBuildNumberEnv', snake_case: 'bitbucket_build_number_env', ALL_CAP: 'BITBUCKET_BUILD_NUMBER', cache key: 'env:bitbucket_build_number:pipeline'.
 *   Model Identifier Format: 'bitbucket_build_number-{resourceType}-{timestamp}' (e.g., 'bitbucket_build_number-pipeline-20250807').
 *   Variations and Use Cases: Used for Bitbucket CI builds in Trakfox; pipeline automation in HealthOrb; CI jobs in DnDHubs.
 *   Example Usage: Detecting via process.env.BITBUCKET_BUILD_NUMBER.
 *   @example 'BITBUCKET_BUILD_NUMBER'
 *
 * - 'BUDDY_RUN_ID': Buddy CI platform run identifier.
 *   Classifications: Semantic CI environment; Buddy standard.
 *   Identifiers: lowercase: 'buddy_run_id', camelCase: 'buddyRunIdEnv', snake_case: 'buddy_run_id_env', ALL_CAP: 'BUDDY_RUN_ID', cache key: 'env:buddy_run_id:pipeline'.
 *   Model Identifier Format: 'buddy_run_id-{resourceType}-{timestamp}' (e.g., 'buddy_run_id-pipeline-20250807').
 *   Variations and Use Cases: Used for Buddy CI workflows in Trakfox; automation in HealthOrb; build jobs in DnDHubs.
 *   Example Usage: Detecting via process.env.BUDDY_RUN_ID.
 *   @example 'BUDDY_RUN_ID'
 *
 * - 'GITLAB_CI': GitLab CI/CD platform indicator.
 *   Classifications: Semantic CI environment; GitLab CI standard.
 *   Identifiers: lowercase: 'gitlab_ci', camelCase: 'gitlabCiEnv', snake_case: 'gitlab_ci_env', ALL_CAP: 'GITLAB_CI', cache key: 'env:gitlab_ci:pipeline'.
 *   Model Identifier Format: 'gitlab_ci-{resourceType}-{timestamp}' (e.g., 'gitlab_ci-pipeline-20250807').
 *   Variations and Use Cases: Used for GitLab CI pipelines in Trakfox; CI/CD automation in HealthOrb; build workflows in DnDHubs.
 *   Example Usage: Detecting via process.env.GITLAB_CI.
 *   @example 'GITLAB_CI'
 *
 * - 'CODEBUILD_BUILD_ID': AWS CodeBuild build identifier.
 *   Classifications: Semantic CI environment; AWS CodeBuild standard.
 *   Identifiers: lowercase: 'codebuild_build_id', camelCase: 'codebuildBuildIdEnv', snake_case: 'codebuild_build_id_env', ALL_CAP: 'CODEBUILD_BUILD_ID', cache key: 'env:codebuild_build_id:pipeline'.
 *   Model Identifier Format: 'codebuild_build_id-{resourceType}-{timestamp}' (e.g., 'codebuild_build_id-pipeline-20250807').
 *   Variations and Use Cases: Used for AWS CodeBuild CI in Trakfox; cloud CI in HealthOrb; build jobs in DnDHubs.
 *   Example Usage: Detecting via process.env.CODEBUILD_BUILD_ID.
 *   @example 'CODEBUILD_BUILD_ID'
 *
 * - 'CODEBUILD_BUILD_NUMBER': AWS CodeBuild build number.
 *   Classifications: Semantic CI environment; AWS CodeBuild standard.
 *   Identifiers: lowercase: 'codebuild_build_number', camelCase: 'codebuildBuildNumberEnv', snake_case: 'codebuild_build_number_env', ALL_CAP: 'CODEBUILD_BUILD_NUMBER', cache key: 'env:codebuild_build_number:pipeline'.
 *   Model Identifier Format: 'codebuild_build_number-{resourceType}-{timestamp}' (e.g., 'codebuild_build_number-pipeline-20250807').
 *   Variations and Use Cases: Used for AWS CodeBuild build tracking in Trakfox; version tracking in HealthOrb; CI logs in DnDHubs.
 *   Example Usage: Detecting via process.env.CODEBUILD_BUILD_NUMBER.
 *   @example 'CODEBUILD_BUILD_NUMBER'
 *
 * - 'PROJECT_ID': Google Cloud Build project identifier.
 *   Classifications: Semantic CI environment; Google Cloud Build standard.
 *   Identifiers: lowercase: 'project_id', camelCase: 'projectIdEnv', snake_case: 'project_id_env', ALL_CAP: 'PROJECT_ID', cache key: 'env:project_id:pipeline'.
 *   Model Identifier Format: 'project_id-{resourceType}-{timestamp}' (e.g., 'project_id-pipeline-20250807').
 *   Variations and Use Cases: Used for Google Cloud Build CI in Trakfox; cloud CI in HealthOrb; build jobs in DnDHubs.
 *   Example Usage: Detecting via process.env.PROJECT_ID.
 *   @example 'PROJECT_ID'
 *
 * - 'TRAVIS_EVENT_TYPE': Travis CI event type (e.g., push, pull_request).
 *   Classifications: Semantic CI environment; Travis CI metadata standard.
 *   Identifiers: lowercase: 'travis_event_type', camelCase: 'travisEventTypeEnv', snake_case: 'travis_event_type_env', ALL_CAP: 'TRAVIS_EVENT_TYPE', cache key: 'env:travis_event_type:pipeline'.
 *   Model Identifier Format: 'travis_event_type-{resourceType}-{timestamp}' (e.g., 'travis_event_type-job-20250807').
 *   Variations and Use Cases: Used for Travis CI event tracking in Trakfox; pipeline triggers in HealthOrb; CI events in DnDHubs.
 *   Example Usage: Detecting via process.env.TRAVIS_EVENT_TYPE.
 *   @example 'TRAVIS_EVENT_TYPE'
 *
 * - 'GITHUB_EVENT_NAME': GitHub Actions event name (e.g., push, pull_request).
 *   Classifications: Semantic CI environment; GitHub Actions metadata standard.
 *   Identifiers: lowercase: 'github_event_name', camelCase: 'githubEventNameEnv', snake_case: 'github_event_name_env', ALL_CAP: 'GITHUB_EVENT_NAME', cache key: 'env:github_event_name:pipeline'.
 *   Model Identifier Format: 'github_event_name-{resourceType}-{timestamp}' (e.g., 'github_event_name-job-20250807').
 *   Variations and Use Cases: Used for GitHub Actions event tracking in Trakfox; pipeline triggers in HealthOrb; CI events in DnDHubs.
 *   Example Usage: Detecting via process.env.GITHUB_EVENT_NAME.
 *   @example 'GITHUB_EVENT_NAME'
 *
 * - 'DRONE_BUILD_EVENT': Drone CI build event type (e.g., push, pull_request).
 *   Classifications: Semantic CI environment; Drone metadata standard.
 *   Identifiers: lowercase: 'drone_build_event', camelCase: 'droneBuildEventEnv', snake_case: 'drone_build_event_env', ALL_CAP: 'DRONE_BUILD_EVENT', cache key: 'env:drone_build_event:pipeline'.
 *   Model Identifier Format: 'drone_build_event-{resourceType}-{timestamp}' (e.g., 'drone_build_event-job-20250807').
 *   Variations and Use Cases: Used for Drone CI event tracking in Trakfox; pipeline triggers in HealthOrb; CI events in DnDHubs.
 *   Example Usage: Detecting via process.env.DRONE_BUILD_EVENT.
 *   @example 'DRONE_BUILD_EVENT'
 *
 * - 'TRAVIS_BRANCH': Travis CI branch name for the build.
 *   Classifications: Semantic CI environment; Travis CI metadata standard.
 *   Identifiers: lowercase: 'travis_branch', camelCase: 'travisBranchEnv', snake_case: 'travis_branch_env', ALL_CAP: 'TRAVIS_BRANCH', cache key: 'env:travis_branch:pipeline'.
 *   Model Identifier Format: 'travis_branch-{resourceType}-{timestamp}' (e.g., 'travis_branch-job-20250807').
 *   Variations and Use Cases: Used for branch-specific builds in Trakfox; branch tracking in HealthOrb; CI jobs in DnDHubs.
 *   Example Usage: Detecting via process.env.TRAVIS_BRANCH.
 *   @example 'TRAVIS_BRANCH'
 *
 * - 'GITHUB_REF': GitHub Actions branch or tag reference.
 *   Classifications: Semantic CI environment; GitHub Actions metadata standard.
 *   Identifiers: lowercase: 'github_ref', camelCase: 'githubRefEnv', snake_case: 'github_ref_env', ALL_CAP: 'GITHUB_REF', cache key: 'env:github_ref:pipeline'.
 *   Model Identifier Format: 'github_ref-{resourceType}-{timestamp}' (e.g., 'github_ref-job-20250807').
 *   Variations and Use Cases: Used for branch/tag builds in Trakfox; ref tracking in HealthOrb; CI jobs in DnDHubs.
 *   Example Usage: Detecting via process.env.GITHUB_REF.
 *   @example 'GITHUB_REF'
 *
 * - 'BITBUCKET_BRANCH': Bitbucket Pipelines branch name.
 *   Classifications: Semantic CI environment; Bitbucket Pipelines metadata standard.
 *   Identifiers: lowercase: 'bitbucket_branch', camelCase: 'bitbucketBranchEnv', snake_case: 'bitbucket_branch_env', ALL_CAP: 'BITBUCKET_BRANCH', cache key: 'env:bitbucket_branch:pipeline'.
 *   Model Identifier Format: 'bitbucket_branch-{resourceType}-{timestamp}' (e.g., 'bitbucket_branch-job-20250807').
 *   Variations and Use Cases: Used for branch-specific builds in Trakfox; branch tracking in HealthOrb; CI jobs in DnDHubs.
 *   Example Usage: Detecting via process.env.BITBUCKET_BRANCH.
 *   @example 'BITBUCKET_BRANCH'
 *
 * - 'DRONE_BRANCH': Drone CI branch name.
 *   Classifications: Semantic CI environment; Drone metadata standard.
 *   Identifiers: lowercase: 'drone_branch', camelCase: 'droneBranchEnv', snake_case: 'drone_branch_env', ALL_CAP: 'DRONE_BRANCH', cache key: 'env:drone_branch:pipeline'.
 *   Model Identifier Format: 'drone_branch-{resourceType}-{timestamp}' (e.g., 'drone_branch-job-20250807').
 *   Variations and Use Cases: Used for branch-specific builds in Trakfox; branch tracking in HealthOrb; CI jobs in DnDHubs.
 *   Example Usage: Detecting via process.env.DRONE_BRANCH.
 *   @example 'DRONE_BRANCH'
 *
 * - 'CI_COMMIT_SHA': GitLab CI commit SHA.
 *   Classifications: Semantic CI environment; GitLab CI metadata standard.
 *   Identifiers: lowercase: 'ci_commit_sha', camelCase: 'ciCommitShaEnv', snake_case: 'ci_commit_sha_env', ALL_CAP: 'CI_COMMIT_SHA', cache key: 'env:ci_commit_sha:pipeline'.
 *   Model Identifier Format: 'ci_commit_sha-{resourceType}-{timestamp}' (e.g., 'ci_commit_sha-job-20250807').
 *   Variations and Use Cases: Used for commit tracking in Trakfox; version control in HealthOrb; CI jobs in DnDHubs.
 *   Example Usage: Detecting via process.env.CI_COMMIT_SHA.
 *   @example 'CI_COMMIT_SHA'
 *
 * - 'GITHUB_REPOSITORY': GitHub Actions repository name.
 *   Classifications: Semantic CI environment; GitHub Actions metadata standard.
 *   Identifiers: lowercase: 'github_repository', camelCase: 'githubRepositoryEnv', snake_case: 'github_repository_env', ALL_CAP: 'GITHUB_REPOSITORY', cache key: 'env:github_repository:pipeline'.
 *   Model Identifier Format: 'github_repository-{resourceType}-{timestamp}' (e.g., 'github_repository-job-20250807').
 *   Variations and Use Cases: Used for repository tracking in Trakfox; project identification in HealthOrb; CI jobs in DnDHubs.
 *   Example Usage: Detecting via process.env.GITHUB_REPOSITORY.
 *   @example 'GITHUB_REPOSITORY'
 *
 * - 'APPVEYOR_REPO_NAME': AppVeyor repository name.
 *   Classifications: Semantic CI environment; AppVeyor metadata standard.
 *   Identifiers: lowercase: 'appveyor_repo_name', camelCase: 'appveyorRepoNameEnv', snake_case: 'appveyor_repo_name_env', ALL_CAP: 'APPVEYOR_REPO_NAME', cache key: 'env:appveyor_repo_name:pipeline'.
 *   Model Identifier Format: 'appveyor_repo_name-{resourceType}-{timestamp}' (e.g., 'appveyor_repo_name-job-20250807').
 *   Variations and Use Cases: Used for repository tracking in Trakfox; project identification in HealthOrb; CI jobs in DnDHubs.
 *   Example Usage: Detecting via process.env.APPVEYOR_REPO_NAME.
 *   @example 'APPVEYOR_REPO_NAME'
 *
 * - 'CI_PROJECT_PATH': GitLab CI project path.
 *   Classifications: Semantic CI environment; GitLab CI metadata standard.
 *   Identifiers: lowercase: 'ci_project_path', camelCase: 'ciProjectPathEnv', snake_case: 'ci_project_path_env', ALL_CAP: 'CI_PROJECT_PATH', cache key: 'env:ci_project_path:pipeline'.
 *   Model Identifier Format: 'ci_project_path-{resourceType}-{timestamp}' (e.g., 'ci_project_path-job-20250807').
 *   Variations and Use Cases: Used for project tracking in Trakfox; project identification in HealthOrb; CI jobs in DnDHubs.
 *   Example Usage: Detecting via process.env.CI_PROJECT_PATH.
 *   @example 'CI_PROJECT_PATH'
 *
 * - 'TRAVIS_PULL_REQUEST': Travis CI pull request identifier.
 *   Classifications: Semantic CI environment; Travis CI metadata standard.
 *   Identifiers: lowercase: 'travis_pull_request', camelCase: 'travisPullRequestEnv', snake_case: 'travis_pull_request_env', ALL_CAP: 'TRAVIS_PULL_REQUEST', cache key: 'env:travis_pull_request:pipeline'.
 *   Model Identifier Format: 'travis_pull_request-{resourceType}-{timestamp}' (e.g., 'travis_pull_request-job-20250807').
 *   Variations and Use Cases: Used for PR builds in Trakfox; PR testing in HealthOrb; CI jobs in DnDHubs.
 *   Example Usage: Detecting via process.env.TRAVIS_PULL_REQUEST.
 *   @example 'TRAVIS_PULL_REQUEST'
 *
 * - 'GITHUB_HEAD_REF': GitHub Actions pull request head reference.
 *   Classifications: Semantic CI environment; GitHub Actions metadata standard.
 *   Identifiers: lowercase: 'github_head_ref', camelCase: 'githubHeadRefEnv', snake_case: 'github_head_ref_env', ALL_CAP: 'GITHUB_HEAD_REF', cache key: 'env:github_head_ref:pipeline'.
 *   Model Identifier Format: 'github_head_ref-{resourceType}-{timestamp}' (e.g., 'github_head_ref-job-20250807').
 *   Variations and Use Cases: Used for PR builds in Trakfox; PR testing in HealthOrb; CI jobs in DnDHubs.
 *   Example Usage: Detecting via process.env.GITHUB_HEAD_REF.
 *   @example 'GITHUB_HEAD_REF'
 *
 * - 'BITBUCKET_PR_ID': Bitbucket Pipelines pull request identifier.
 *   Classifications: Semantic CI environment; Bitbucket Pipelines metadata standard.
 *   Identifiers: lowercase: 'bitbucket_pr_id', camelCase: 'bitbucketPrIdEnv', snake_case: 'bitbucket_pr_id_env', ALL_CAP: 'BITBUCKET_PR_ID', cache key: 'env:bitbucket_pr_id:pipeline'.
 *   Model Identifier Format: 'bitbucket_pr_id-{resourceType}-{timestamp}' (e.g., 'bitbucket_pr_id-job-20250807').
 *   Variations and Use Cases: Used for PR builds in Trakfox; PR testing in HealthOrb; CI jobs in DnDHubs.
 *   Example Usage: Detecting via process.env.BITBUCKET_PR_ID.
 *   @example 'BITBUCKET_PR_ID'
 *
 * - 'TRAVIS_JOB_ID': Travis CI job identifier.
 *   Classifications: Semantic CI environment; Travis CI metadata standard.
 *   Identifiers: lowercase: 'travis_job_id', camelCase: 'travisJobIdEnv', snake_case: 'travis_job_id_env', ALL_CAP: 'TRAVIS_JOB_ID', cache key: 'env:travis_job_id:pipeline'.
 *   Model Identifier Format: 'travis_job_id-{resourceType}-{timestamp}' (e.g., 'travis_job_id-job-20250807').
 *   Variations and Use Cases: Used for job tracking in Trakfox; job identification in HealthOrb; CI jobs in DnDHubs.
 *   Example Usage: Detecting via process.env.TRAVIS_JOB_ID.
 *   @example 'TRAVIS_JOB_ID'
 *
 * - 'GITHUB_JOB': GitHub Actions job identifier.
 *   Classifications: Semantic CI environment; GitHub Actions metadata standard.
 *   Identifiers: lowercase: 'github_job', camelCase: 'githubJobEnv', snake_case: 'github_job_env', ALL_CAP: 'GITHUB_JOB', cache key: 'env:github_job:pipeline'.
 *   Model Identifier Format: 'github_job-{resourceType}-{timestamp}' (e.g., 'github_job-job-20250807').
 *   Variations and Use Cases: Used for job tracking in Trakfox; job identification in HealthOrb; CI jobs in DnDHubs.
 *   Example Usage: Detecting via process.env.GITHUB_JOB.
 *   @example 'GITHUB_JOB'
 *
 * - 'DRONE_STAGE_NAME': Drone CI stage name.
 *   Classifications: Semantic CI environment; Drone metadata standard.
 *   Identifiers: lowercase: 'drone_stage_name', camelCase: 'droneStageNameEnv', snake_case: 'drone_stage_name_env', ALL_CAP: 'DRONE_STAGE_NAME', cache key: 'env:drone_stage_name:pipeline'.
 *   Model Identifier Format: 'drone_stage_name-{resourceType}-{timestamp}' (e.g., 'drone_stage_name-job-20250807').
 *   Variations and Use Cases: Used for stage tracking in Trakfox; pipeline stages in HealthOrb; CI jobs in DnDHubs.
 *   Example Usage: Detecting via process.env.DRONE_STAGE_NAME.
 *   @example 'DRONE_STAGE_NAME'
 *
 * - 'CI_JOB_ID': GitLab CI job identifier.
 *   Classifications: Semantic CI environment; GitLab CI metadata standard.
 *   Identifiers: lowercase: 'ci_job_id', camelCase: 'ciJobIdEnv', snake_case: 'ci_job_id_env', ALL_CAP: 'CI_JOB_ID', cache key: 'env:ci_job_id:pipeline'.
 *   Model Identifier Format: 'ci_job_id-{resourceType}-{timestamp}' (e.g., 'ci_job_id-job-20250807').
 *   Variations and Use Cases: Used for job tracking in Trakfox; job identification in HealthOrb; CI jobs in DnDHubs.
 *   Example Usage: Detecting via process.env.CI_JOB_ID.
 *   @example 'CI_JOB_ID'
 *
 * - 'BUILDKITE_JOB_ID': Buildkite CI job identifier.
 *   Classifications: Semantic CI environment; Buildkite metadata standard.
 *   Identifiers: lowercase: 'buildkite_job_id', camelCase: 'buildkiteJobIdEnv', snake_case: 'buildkite_job_id_env', ALL_CAP: 'BUILDKITE_JOB_ID', cache key: 'env:buildkite_job_id:pipeline'.
 *   Model Identifier Format: 'buildkite_job_id-{resourceType}-{timestamp}' (e.g., 'buildkite_job_id-job-20250807').
 *   Variations and Use Cases: Used for job tracking in Trakfox; job identification in HealthOrb; CI jobs in DnDHubs.
 *   Example Usage: Detecting via process.env.BUILDKITE_JOB_ID.
 *   @example 'BUILDKITE_JOB_ID'
 */
export type CIEnvironmentTaxonomy = CoreCIEnvironment | CustomCIEnvironment;
export type CoreCIEnvironment = 'CI' | 'CONTINUOUS_INTEGRATION' | 'TRAVIS' | 'CIRCLECI' | 'APPVEYOR' | 'BUILDKITE' | 'DRONE' | 'GITHUB_ACTIONS' | 'JENKINS_URL' | 'TEAMCITY_VERSION' | 'TF_BUILD' | 'BITBUCKET_BUILD_NUMBER' | 'BUDDY_RUN_ID' | 'GITLAB_CI' | 'CODEBUILD_BUILD_ID' | 'CODEBUILD_BUILD_NUMBER' | 'PROJECT_ID' | 'TRAVIS_EVENT_TYPE' | 'GITHUB_EVENT_NAME' | 'DRONE_BUILD_EVENT' | 'TRAVIS_BRANCH' | 'GITHUB_REF' | 'BITBUCKET_BRANCH' | 'DRONE_BRANCH' | 'CI_COMMIT_SHA' | 'GITHUB_REPOSITORY' | 'APPVEYOR_REPO_NAME' | 'CI_PROJECT_PATH' | 'TRAVIS_PULL_REQUEST' | 'GITHUB_HEAD_REF' | 'BITBUCKET_PR_ID' | 'TRAVIS_JOB_ID' | 'GITHUB_JOB' | 'DRONE_STAGE_NAME' | 'CI_JOB_ID' | 'BUILDKITE_JOB_ID';
export type CustomCIEnvironment = string & { __name?: 'CustomCIEnvironment' };