# TripPlanner
A Trip Planner Web Application for CS5610 final project.

Initial Proposal:
https://docs.google.com/document/d/13jWebVuRNWinzF8m2_lh3aleEwTnNxaZ8GTQK_Wtp1Y/edit#


# How to contribute to this repository

## fork a repo
- step1: Fork this [repository](https://github.com/schen246/dronbot-backend.git)
- step2: git clone to local machine from your own repository
    - git clone https://github.com/YOUR-USERNAME/around-delivery-backend (replace YOUR-USERNAME with your repository)
- step3: configure git to sync your fork with the original dronbot-backend repository
    - `cd your_listed_directory` which is the location of the fork you cloned in step2 (around-delivery-backend)
    - `git remote -v`
    ```
    > origin  https://github.com/YOUR_USERNAME/YOUR_FORK.git (fetch)
    > origin  https://github.com/YOUR_USERNAME/YOUR_FORK.git (push)
    ```
    - `git remote add upstream https://github.com/schen246/around-delivery-backend.git`
    - To verify the new upstream repository you've specified for your fork, type git remote -v again. You should see the URL for your fork as origin, and the URL for the original repository as upstream.
    ```
    $ git remote -v
    > origin    https://github.com/YOUR_USERNAME/YOUR_FORK.git (fetch)
    > origin    https://github.com/YOUR_USERNAME/YOUR_FORK.git (push)
    > upstream  https://github.com/ORIGINAL_OWNER/ORIGINAL_REPOSITORY.git (fetch)
    > upstream  https://github.com/ORIGINAL_OWNER/ORIGINAL_REPOSITORY.git (push)
    ```
Now, you can keep your fork synced with the upstream repository with a few Git commands.
## syncing a fork
- step1: Fetch the branches and their respective commits from the upstream repository. Commits to master will be stored in a local branch, upstream/master.
    ```
    $ git fetch upstream
    > remote: Counting objects: 75, done.
    > remote: Compressing objects: 100% (53/53), done.
    > remote: Total 62 (delta 27), reused 44 (delta 9)
    > Unpacking objects: 100% (62/62), done.
    > From https://github.com/ORIGINAL_OWNER/ORIGINAL_REPOSITORY
    >  * [new branch]      master     -> upstream/master
    ```
- step2: Check out your fork's local master branch.
    ```
    $ git checkout master
    > Switched to branch 'master'
    ```
- step3: Merge the changes from upstream/master into your local master branch. This brings your fork's master branch into sync with the upstream repository, without losing your local changes.
    ```
    $ git merge upstream/master
    > Updating a422352..5fdff0f
    > Fast-forward
    >  README                    |    9 -------
    >  README.md                 |    7 ++++++
    >  2 files changed, 7 insertions(+), 9 deletions(-)
    >  delete mode 100644 README
    >  create mode 100644 README.md
    ```
    If your local branch didn't have any unique commits, Git will instead perform a "fast-forward":
    ```
    $ git merge upstream/master
    > Updating 34e91da..16c56ad
    > Fast-forward
    >  README.md                 |    5 +++--
    >  1 file changed, 3 insertions(+), 2 deletions(-)
    ```
- step4: `git push -u origin master`


