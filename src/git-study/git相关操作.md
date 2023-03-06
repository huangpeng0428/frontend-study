
# 每次开发操作
# 查看关联仓库
git remote -vv

# 添加远程仓库
git remote add upstream URL

# 更新远程仓库
git fetch upstream

# 更新代码
git merge upstream/master

# 切换到远程仓库的指定分支
git checkout upstream/develop

# 从远程仓库指定分支切换出功能分支进行开发
git checkout -b ft_xxxxx

# 设置远程分支
git push --set-upstream origin ft_xxxxx

# 推送
git push origin ft_xxxxx
