# Python script to rename files, find-and-replace style

from datetime import datetime
import glob, os, re, sys

def renameFiles(find_pattern, replace_pattern, commit=False):
	print "  Replacing substring " + find_pattern + " in file names with pattern " + replace_pattern
	if not commit:
		print "  Printing file names for debugging. To actually rename the files, use"
		print "    `renameFilesFindAndReplace.py find_pattern replace_pattern True`"

	cwd = os.getcwd()
	count = 0
	for path in sorted(glob.iglob(os.path.join(cwd, '*'))):
		count += 1
		oldName = os.path.basename(path)
		oldName, extension = os.path.splitext(oldName)

		newName = re.sub(find_pattern, replace_pattern, oldName)
		if oldName == newName:
			print '  not renaming ' + oldName
			continue

		basePath = os.path.join(cwd, newName)
		newFullName = basePath + extension
		dupebuster = 0;
		while os.path.exists(newFullName):
			dupebuster += 1
			newFullName = basePath + '-' + str(dupebuster) + extension

		print '  ' + path + ' -> ' + newFullName
		if commit:
			os.rename(path, newFullName)

	if commit: 
		print '  Renamed ' + str(count) + ' files'
	else:
		print '  Printed ' + str(count) + ' filenames for debugging'

if __name__ == "__main__":
   renameFiles(*sys.argv[1:])