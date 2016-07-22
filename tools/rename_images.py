import os

targetDir = "./images/pokemon/250px"
files = os.listdir(targetDir)

for file in files:
    print(file)
    newFileName = file[file.index("250px-")+6:]
    print(newFileName)
    os.rename(os.path.join(targetDir, file), os.path.join(targetDir, newFileName))
